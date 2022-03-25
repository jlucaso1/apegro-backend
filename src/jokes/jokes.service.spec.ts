import { Test, TestingModule } from '@nestjs/testing';
import { Joke } from './entities/joke.entity';
import { JokesService } from './jokes.service';

describe('JokesService', () => {
  let service: JokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokesService],
    }).compile();

    service = module.get<JokesService>(JokesService);
  });

  it('Get a random joke', async () => {
    expect(await service.getRandomJoke()).toBeInstanceOf(Joke);
  });

  it('Get all categories', async () => {
    expect(await service.getCategories()).toBeInstanceOf(Array);
  });

  it('Get joke with categories', async () => {
    expect(await service.getRandomJoke('movie')).toBeInstanceOf(Joke);
  });

  it('Search jokes', async () => {
    expect(await service.searchJokes('arnold')).toBeInstanceOf(Array);
  });
});
