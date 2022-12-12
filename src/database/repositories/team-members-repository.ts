export abstract class TeamMembersRepository {
  abstract create(name: string, membersFunction: string): Promise<void>;
}
