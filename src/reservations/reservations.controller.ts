import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('reservations')
@UseGuards(JwtAuthGuard)
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async create(@Body() data: {
    date: Date;
    time: string;
    serviceType: string;
    notes?: string;
    userId: number;
  }){
    return this.reservationsService.create(data);
  }

  @Get()
  async findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(Number(id));
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.reservationsService.findByUser(Number(userId));
  }
} 