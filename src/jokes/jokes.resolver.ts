import { Resolver, Query } from '@nestjs/graphql';
import { Joke } from 'src/entities/joke.entity';
import { JokesService } from './jokes.service';

@Resolver((of) => Joke)
export class JokesResolver {
  constructor(private readonly jokesService: JokesService) {}

  @Query((returns) => Joke)
  randomJoke(): Promise<Joke> {
    return this.jokesService.getRandomJoke();
  }
}
