import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    date: Date;
    time: string;
    serviceType: string;
    notes?: string;
    userId: number;
  }) {
    return this.prisma.reservation.create({
      data,
    });
  }

  async findAll(){
    return this.prisma.reservation.findMany();
  }

  async findOne(id: number) {
    return this.prisma.reservation.findUnique({
      where: { id },
    });
  }

  async findByUser(userId: number){
    return this.prisma.reservation.findMany({
      where: { userId },
    });
  }
} 