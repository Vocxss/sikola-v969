#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/7997164c19fd14e301f29ac8cb9385b566cb79534d81cb5582ced5f2a8bb55f9/contract';
import endContract from '../../snapshots/7997164c19fd14e301f29ac8cb9385b566cb79534d81cb5582ced5f2a8bb55f9/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  lit,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'account',
        columns: [
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('password', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('role', 'text', {
            notNull: true,
            default: lit('STUDENT'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'account_role_check_e4790e0f',
            "\"role\" IN ('STUDENT', 'LECTURER', 'ADMIN')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'assignment',
        columns: [
          col('accessedAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('courseId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('description', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('dueDate', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('maxScore', 'int4', {
            notNull: true,
            default: lit(100),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'class',
        columns: [
          col('accessedAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('description', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('semester', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('year', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('class_semester_check_7602ac6a', "\"semester\" IN ('GANJIL', 'GENAP')"),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'course',
        columns: [
          col('accessedAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('classId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('description', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('order', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'enrollment',
        columns: [
          col('classId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('progress', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'material',
        columns: [
          col('content', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('courseId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('fileUrl', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('order', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'quiz',
        columns: [
          col('accessedAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('courseId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('description', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('duration', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('maxScore', 'int4', {
            notNull: true,
            default: lit(100),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'quizAnswer',
        columns: [
          col('answer', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('isCorrect', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('questionId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('score', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'quizQuestion',
        columns: [
          col('correctAnswer', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('options', 'json', { notNull: true, codecRef: { codecId: 'pg/json@1' } }),
          col('order', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('question', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('questionType', 'text', {
            notNull: true,
            default: lit('MULTIPLE_CHOICE'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('quizId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('score', 'int4', {
            notNull: true,
            default: lit(1),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'quizQuestion_questionType_check_8bddbb90',
            "\"questionType\" IN ('MULTIPLE_CHOICE', 'TRUE_FALSE', 'ESSAY')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'submission',
        columns: [
          col('assignmentId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('content', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('fileUrl', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('gradedAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('score', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('DRAFT'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('submittedAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'submission_status_check_7c3cbfcc',
            "\"status\" IN ('DRAFT', 'SUBMITTED', 'GRADED', 'RETURNED')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'user',
        columns: [
          col('avatarUrl', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('ACTIVE'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'user_status_check_733cb301',
            "\"status\" IN ('INACTIVE', 'PENDING', 'ACTIVE')",
          ),
        ],
      }),
      this.addUnique({
        schema: 'public',
        table: 'account',
        constraint: 'account_email_key',
        columns: ['email'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'enrollment',
        constraint: 'enrollment_userId_classId_key',
        columns: ['userId', 'classId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'quizAnswer',
        constraint: 'quizAnswer_questionId_userId_key',
        columns: ['questionId', 'userId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'submission',
        constraint: 'submission_assignmentId_userId_key',
        columns: ['assignmentId', 'userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'account',
        index: 'account_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'assignment',
        index: 'assignment_accessedAt_idx_d176d70d',
        columns: ['accessedAt'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'assignment',
        index: 'assignment_courseId_idx_12f72d2a',
        columns: ['courseId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'class',
        index: 'class_accessedAt_idx_d176d70d',
        columns: ['accessedAt'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'course',
        index: 'course_accessedAt_idx_d176d70d',
        columns: ['accessedAt'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'course',
        index: 'course_classId_idx_0089e5e7',
        columns: ['classId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'enrollment',
        index: 'enrollment_classId_idx_0089e5e7',
        columns: ['classId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'enrollment',
        index: 'enrollment_userId_classId_idx_72a2a635',
        columns: ['userId', 'classId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'enrollment',
        index: 'enrollment_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'material',
        index: 'material_courseId_idx_12f72d2a',
        columns: ['courseId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'quiz',
        index: 'quiz_accessedAt_idx_d176d70d',
        columns: ['accessedAt'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'quiz',
        index: 'quiz_courseId_idx_12f72d2a',
        columns: ['courseId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'quizAnswer',
        index: 'quizAnswer_questionId_idx_fdb42076',
        columns: ['questionId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'quizAnswer',
        index: 'quizAnswer_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'quizQuestion',
        index: 'quizQuestion_quizId_idx_c721979c',
        columns: ['quizId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'submission',
        index: 'submission_assignmentId_idx_8cfb4ac4',
        columns: ['assignmentId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'submission',
        index: 'submission_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'account',
        foreignKey: {
          name: 'account_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'assignment',
        foreignKey: {
          name: 'assignment_courseId_fkey',
          columns: ['courseId'],
          references: { schema: 'public', table: 'course', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'course',
        foreignKey: {
          name: 'course_classId_fkey',
          columns: ['classId'],
          references: { schema: 'public', table: 'class', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'enrollment',
        foreignKey: {
          name: 'enrollment_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'enrollment',
        foreignKey: {
          name: 'enrollment_classId_fkey',
          columns: ['classId'],
          references: { schema: 'public', table: 'class', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'material',
        foreignKey: {
          name: 'material_courseId_fkey',
          columns: ['courseId'],
          references: { schema: 'public', table: 'course', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'quiz',
        foreignKey: {
          name: 'quiz_courseId_fkey',
          columns: ['courseId'],
          references: { schema: 'public', table: 'course', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'quizAnswer',
        foreignKey: {
          name: 'quizAnswer_questionId_fkey',
          columns: ['questionId'],
          references: { schema: 'public', table: 'quizQuestion', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'quizAnswer',
        foreignKey: {
          name: 'quizAnswer_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'quizQuestion',
        foreignKey: {
          name: 'quizQuestion_quizId_fkey',
          columns: ['quizId'],
          references: { schema: 'public', table: 'quiz', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'submission',
        foreignKey: {
          name: 'submission_assignmentId_fkey',
          columns: ['assignmentId'],
          references: { schema: 'public', table: 'assignment', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'submission',
        foreignKey: {
          name: 'submission_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
