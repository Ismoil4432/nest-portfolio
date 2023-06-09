import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { User } from './user/models/user.model';
import { ImageModule } from './image/image.module';
import { JobModule } from './job/job.module';
import { Job } from './job/models/job.model';
import { EducationModule } from './education/education.module';
import { Education } from './education/model/education.model';
import { SocialMediaModule } from './social-media/social-media.module';
import { SocialMedia } from './social-media/models/social-media.model';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/models/blog.model';
import { SkillModule } from './skill/skill.module';
import { Skill } from './skill/models/skill.model';
import { ProjectModule } from './project/project.module';
import { Project } from './project/models/project.model';
import { RatingModule } from './rating/rating.module';
import { Rating } from './rating/models/rating.model';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/models/comment.model';
import { ChatModule } from './chat/chat.module';
import { Chat } from './chat/models/chat.model';
import { MessageModule } from './message/message.module';
import { Message } from './message/models/message.model';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/models/admin.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      logging: false,
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      models: [
        User,
        Job,
        Education,
        SocialMedia,
        Blog,
        Skill,
        Project,
        Rating,
        Comment,
        Chat,
        Message,
        Admin,
      ],
    }),
    UserModule,
    ImageModule,
    JobModule,
    EducationModule,
    SocialMediaModule,
    BlogModule,
    SkillModule,
    ProjectModule,
    RatingModule,
    CommentModule,
    ChatModule,
    MessageModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
