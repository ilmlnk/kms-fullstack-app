-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "object_id" TEXT,
    "author_id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "updating_date" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "version_counter" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "is_published" BOOLEAN DEFAULT false,
    "category_id" TEXT,
    "categoryId" INTEGER,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "object_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "updating_date" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,
    "version_counter" INTEGER,
    "title" TEXT NOT NULL,
    "subjectId" INTEGER,
    "starting_date" TIMESTAMP(3) NOT NULL,
    "ending_date" TIMESTAMP(3) NOT NULL,
    "type" TEXT,
    "description" TEXT,
    "teacherId" INTEGER,
    "group" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "object_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL,
    "version_counter" INTEGER,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "acception_status" TEXT NOT NULL DEFAULT 'awaited',
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "encrypted_password" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" SERIAL NOT NULL,
    "object_id" TEXT,
    "author_id" TEXT,
    "tenant_id" TEXT,
    "creation_date" TIMESTAMP(3),
    "deleted" BOOLEAN,
    "version_counter" INTEGER,
    "first_name" TEXT,
    "last_name" TEXT,
    "id_code" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "username" TEXT,
    "encrypted_password" TEXT,
    "childId" INTEGER,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Child" (
    "id" SERIAL NOT NULL,
    "object_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL,
    "version_counter" INTEGER,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "acception_status" TEXT NOT NULL DEFAULT 'awaited',
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "Child_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrator" (
    "id" SERIAL NOT NULL,
    "object_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL,
    "version_counter" BIGINT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "encrypted_password" TEXT NOT NULL,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "object_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL,
    "version_counter" INTEGER,
    "email" TEXT,
    "phone_number" TEXT,
    "role" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "parentId" INTEGER,
    "administratorId" INTEGER,
    "teacherId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "subjectId" INTEGER,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subject_object_id_key" ON "Subject"("object_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_author_id_key" ON "Subject"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_tenant_id_key" ON "Subject"("tenant_id");

-- CreateIndex
CREATE INDEX "Subject_category_id_idx" ON "Subject"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_object_id_key" ON "Event"("object_id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_author_id_key" ON "Event"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_tenant_id_key" ON "Event"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_object_id_key" ON "Teacher"("object_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_author_id_key" ON "Teacher"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_tenant_id_key" ON "Teacher"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_phone_number_key" ON "Teacher"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_username_key" ON "Teacher"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_object_id_key" ON "Parent"("object_id");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_author_id_key" ON "Parent"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_tenant_id_key" ON "Parent"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_object_id_key" ON "Administrator"("object_id");

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_author_id_key" ON "Administrator"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_tenant_id_key" ON "Administrator"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_email_key" ON "Administrator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_username_key" ON "Administrator"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_phone_number_key" ON "Administrator"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_object_id_key" ON "User"("object_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_author_id_key" ON "User"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_tenant_id_key" ON "User"("tenant_id");

-- CreateIndex
CREATE INDEX "Attachment_subject_id_idx" ON "Attachment"("subject_id");

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Child"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Child" ADD CONSTRAINT "Child_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_administratorId_fkey" FOREIGN KEY ("administratorId") REFERENCES "Administrator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
