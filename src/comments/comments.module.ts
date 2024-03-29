import { Module, forwardRef } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { UsersModule } from '../users/users.module';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    RestaurantsModule,
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Comment]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
