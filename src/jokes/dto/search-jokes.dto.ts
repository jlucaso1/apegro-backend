import { ArgsType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@ArgsType()
export class SearchJokesDto {
  @MinLength(3)
  @Field()
  query: string;
}
