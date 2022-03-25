import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Joke } from 'src/entities/joke.entity';

@Injectable()
export class JokesService {
  api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/',
  });

  async getRandomJoke(category?: string): Promise<Joke> {
    const { data } = await this.api.get('random', {
      params: {
        category,
      },
    });
    return new Joke({ ...data });
  }

  async getCategories(): Promise<string[]> {
    const { data } = await this.api.get('categories');
    return data;
  }

  async searchJokes(query: string): Promise<Joke[]> {
    const { data }: { data: SearchJokesResult } = await this.api.get('search', {
      params: {
        query,
      },
    });
    return data.result.map((joke) => new Joke(joke));
  }
}

type SearchJokesResult = {
  total: number;
  result: Joke[];
};
