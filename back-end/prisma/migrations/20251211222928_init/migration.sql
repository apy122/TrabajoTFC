-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "fk_puesto" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_fk_puesto_fkey" FOREIGN KEY ("fk_puesto") REFERENCES "Puesto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
