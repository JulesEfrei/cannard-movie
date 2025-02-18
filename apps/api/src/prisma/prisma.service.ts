import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

/*
 * USAGE:
 *
 * Call PrismaService to any constructor and use it as PrismaClient.
 *
 * Ex:
 * //user.service.ts
 *
 * ```typescipt
 *  @Injectable()
 *  export class UserService {
 *    constructor(private prisma: PrismaService){}
 *
 *    async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput,): Promise<User | null> {
        return this.prisma.user.findUnique({
          where: userWhereUniqueInput,
        });
      }
 *  }
 * ```
 */
