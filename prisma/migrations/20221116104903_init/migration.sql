-- CreateTable
CREATE TABLE "Keyword" (
    "id" SERIAL NOT NULL,
    "keyword_name" TEXT NOT NULL,
    "total_adwords" TEXT,
    "total_links" TEXT,
    "total_search_results" TEXT,
    "html_code" VARCHAR(255),

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserKeyword" (
    "user_email" TEXT NOT NULL,
    "keyword_name" TEXT NOT NULL,

    CONSTRAINT "UserKeyword_pkey" PRIMARY KEY ("user_email","keyword_name")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_keyword_name_key" ON "Keyword"("keyword_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserKeyword" ADD CONSTRAINT "UserKeyword_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserKeyword" ADD CONSTRAINT "UserKeyword_keyword_name_fkey" FOREIGN KEY ("keyword_name") REFERENCES "Keyword"("keyword_name") ON DELETE RESTRICT ON UPDATE CASCADE;
