import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Joke } from 'src/entities/joke.entity';

@Injectable()
export class JokesService {
  api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/',
  });

  async getRandomJoke(): Promise<Joke> {
    const { data } = await this.api.get('random');
    return new Joke({ ...data });
  }
}
