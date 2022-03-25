import { Resolver, Query, Args } from '@nestjs/graphql';
import { Joke } from 'src/jokes/entities/joke.entity';
import { JokesService } from './jokes.service';

@Resolver((of) => Joke)
export class JokesResolver {
  constructor(private readonly jokesService: JokesService) {}

  @Query((returns) => Joke)
  randomJoke(
    @Args('category', { type: () => String, nullable: true }) category?: string,
  ): Promise<Joke> {
    return this.jokesService.getRandomJoke(category);
  }

  @Query((returns) => [String])
  categories(): Promise<string[]> {
    return this.jokesService.getCategories();
  }

  @Query((returns) => [Joke])
  searchJokes(
    @Args('query', { type: () => String }) query: string,
  ): Promise<Joke[]> {
    return this.jokesService.searchJokes(query);
  }
}
