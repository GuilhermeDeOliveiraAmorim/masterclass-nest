import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { TeamMembersRepository } from '../team-members-repository';

@Injectable()
export class PrismaMembersRepository implements TeamMembersRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, membersFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: membersFunction,
      },
    });
  }
}
