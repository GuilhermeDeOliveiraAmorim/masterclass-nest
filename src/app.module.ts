import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaMembersRepository } from './database/repositories/prisma/prisma-members-repository';
import { TeamMembersRepository } from './database/repositories/team-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: TeamMembersRepository,
      useClass: PrismaMembersRepository,
    },
  ],
})
export class AppModule {}
