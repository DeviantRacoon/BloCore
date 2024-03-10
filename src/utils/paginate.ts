import { ObjectLiteral, SelectQueryBuilder } from "typeorm";

interface PaginationOptions {
    page: number;
    limit?: number;
}

export interface PaginatedResult<T> {
    data: T[];
    page: number;
    limit: number;
    totalCount: number;
  }
  

export class PaginationService {
    private static DEFAULT_LIMIT = 15;

    async paginate<T extends ObjectLiteral>(queryBuilder: SelectQueryBuilder<T>, options: PaginationOptions): Promise<PaginatedResult<T>> {
        const { page, limit = PaginationService.DEFAULT_LIMIT } = options;

        const [results, totalCount] = await queryBuilder
            .skip((page - 1) * limit)
            .take(limit)
            .getManyAndCount();

        return {
            data: results,
            page,
            limit,
            totalCount,
        };
    }
}
