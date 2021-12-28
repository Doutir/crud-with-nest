import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      process.env.MONGODB_URL || 'mongodb://localhost/crudWithNest',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
