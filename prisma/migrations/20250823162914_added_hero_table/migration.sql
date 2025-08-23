-- CreateTable
CREATE TABLE "public"."Hero" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "content" TEXT,
    "buttonLink" TEXT,
    "buttonText" TEXT,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);
