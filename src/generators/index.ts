import { generator as graphcooljsgenerator } from './graphcool-js'
import { generator as graphcooltsgenerator } from './graphcool-ts'
import { generator as prismajsgenerator } from './prisma-js'
import { generator as prismatsgenerator } from './prisma-ts'
import { generator as prismaflowgenerator } from './prisma-flow'
import { generator as bindingtsgenerator } from './binding-ts'
import { generator as bindingjsgenerator } from './binding-js'
import { Generator } from '../types';

export const generators: { [key: string]: Generator} = {
    'graphcool-js': graphcooljsgenerator,
    'graphcool-ts': graphcooltsgenerator,
    'prisma-js': prismajsgenerator,
    'prisma-ts': prismatsgenerator,
    'prisma-flow': prismaflowgenerator,
    'binding-ts': bindingtsgenerator,
    'binding-js': bindingjsgenerator,
}