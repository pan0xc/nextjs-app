-- CreateTable
CREATE TABLE "UrlRecord" (
    "id" TEXT NOT NULL,
    "originURL" TEXT NOT NULL,
    "shortURL" TEXT NOT NULL,
    "urlCode" TEXT NOT NULL,

    CONSTRAINT "UrlRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UrlRecord_urlCode_key" ON "UrlRecord"("urlCode");
