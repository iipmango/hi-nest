import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDTO } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDTO) {}
