declare namespace API {
  type URLRecord = {
    id: string;
    originURL: string;
    shortURL: string;
    urlCode: string;
    updatedAt: string;
    createdAt: string;
  }

  type URLOutput = {
    message: string;
    data?: string | URLRecord;
    statusCode: number;
  }

  type URLInput = {
    originURL: string;
    urlCode: string;
  }
}
