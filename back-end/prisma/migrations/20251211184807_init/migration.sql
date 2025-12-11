-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ciudad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fk_ciudad" INTEGER NOT NULL,

    CONSTRAINT "Zona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mercado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fk_zona" INTEGER NOT NULL,

    CONSTRAINT "Mercado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puesto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fk_categoria" INTEGER NOT NULL,
    "fk_mercado" INTEGER NOT NULL,
    "numeroatiende" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Puesto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turno" (
    "id" SERIAL NOT NULL,
    "numeroTicket" SERIAL NOT NULL,
    "fk_puesto" INTEGER NOT NULL,
    "fk_cliente" INTEGER NOT NULL,
    "hora_tomada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_emision" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Turno_fk_puesto_numeroTicket_fecha_emision_key" ON "Turno"("fk_puesto", "numeroTicket", "fecha_emision");

-- AddForeignKey
ALTER TABLE "Zona" ADD CONSTRAINT "Zona_fk_ciudad_fkey" FOREIGN KEY ("fk_ciudad") REFERENCES "Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mercado" ADD CONSTRAINT "Mercado_fk_zona_fkey" FOREIGN KEY ("fk_zona") REFERENCES "Zona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Puesto" ADD CONSTRAINT "Puesto_fk_categoria_fkey" FOREIGN KEY ("fk_categoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Puesto" ADD CONSTRAINT "Puesto_fk_mercado_fkey" FOREIGN KEY ("fk_mercado") REFERENCES "Mercado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_fk_puesto_fkey" FOREIGN KEY ("fk_puesto") REFERENCES "Puesto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_fk_cliente_fkey" FOREIGN KEY ("fk_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
