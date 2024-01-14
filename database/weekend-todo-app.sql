-- Create DATABASE "Full-Stack-React";
-- Table Structure
CREATE TABLE "tasktable" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(80) NOT NULL,
    "is_complete" BOOLEAN DEFAULT false
);

INSERT INTO "tasktable" ("task", "is_complete")
VALUES ('Make this App', false);