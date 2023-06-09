import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface JobAttrs {
  id: string;
  date_from: string;
  date_to: string;
  company: string;
  position: string;
  image_name: string;
}

@Table({ tableName: 'job' })
export class Job extends Model<Job, JobAttrs> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date_from: string;

  @Column({
    type: DataType.DATE,
  })
  date_to: string;

  @Column({
    type: DataType.STRING,
  })
  company: string;

  @Column({
    type: DataType.STRING,
  })
  position: string;

  @Column({
    type: DataType.STRING,
  })
  image_name: string;
}
