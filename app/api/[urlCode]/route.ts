import prisma from '@/lib/prisma';
import { STATUS_CODES } from 'node:http';
import * as v from 'valibot';

const UrlCodeSchema = v.object({
  urlCode: v.pipe(v.string(), v.nonEmpty()),
});

type UrlCode = v.InferInput<typeof UrlCodeSchema>;

export async function GET(
  _request: Request,
  { params }: { params: Promise<UrlCode> },
) {
  const paramsObject = await params;

  const result = v.safeParse(UrlCodeSchema, paramsObject);
  // Type miss match, throw error
  if (!result.success) {
    return Response.json(
      {
        statusCode: 400,
        message: STATUS_CODES[400] + ': ' + v.summarize(result.issues),
      },
      {
        status: 400,
      },
    );
  }

  const { urlCode } = v.parse(UrlCodeSchema, paramsObject);
  const urlRecord = await prisma.urlRecord.findFirst({
    where: { urlCode },
  });

  if (!urlRecord) {
    return Response.json(
      {
        statusCode: 404,
        message: STATUS_CODES[404],
      },
      {
        status: 404,
      },
    );
  }

  return Response.json(
    {
      statusCode: 200,
      message: STATUS_CODES[200],
      data: urlRecord,
    },
    {
      status: 200,
    },
  );
}
