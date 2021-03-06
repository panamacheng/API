import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';

@Table
export class Comment extends Model<Comment> {
  @Column
  public botID: number;

  @Column({
    type: DataType.TEXT,
  })
  public text!: string;

  @CreatedAt
  @Column
  public createdAt!: Date;

  @UpdatedAt
  @Column
  public updatedAt!: Date;

  @DeletedAt
  @Column
  public deletedAt!: Date;
}
