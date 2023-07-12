/*
  Warnings:

  - Added the required column `breaktime` to the `Shift` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shift` ADD COLUMN `breaktime` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `ShiftShift` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstShiftId` INTEGER NOT NULL,
    `secondShiftId` INTEGER NOT NULL,
    `delta` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ShiftShift` ADD CONSTRAINT `ShiftShift_firstShiftId_fkey` FOREIGN KEY (`firstShiftId`) REFERENCES `Shift`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShiftShift` ADD CONSTRAINT `ShiftShift_secondShiftId_fkey` FOREIGN KEY (`secondShiftId`) REFERENCES `Shift`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
