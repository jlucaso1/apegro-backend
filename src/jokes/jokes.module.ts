import { Module } from '@nestjs/common';
import { JokesResolver } from './jokes.resolver';
import { JokesService } from './jokes.service';

@Module({
  providers: [JokesResolver, JokesService]
})
export class JokesModule {}
