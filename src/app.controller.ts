import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './database/dtos/create-team-member';
import { TeamMembersRepository } from './database/repositories/team-members-repository';

@Controller('app')
export class AppController {
  constructor(private teamMembersRepository: TeamMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.teamMembersRepository.create(name, memberFunction);
  }
}
