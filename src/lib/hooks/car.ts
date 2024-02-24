/* eslint-disable */
import type { Prisma } from '@prisma/client';
import {
    type GetNextArgs,
    type QueryOptions,
    type InfiniteQueryOptions,
    type MutationOptions,
    type PickEnumerable,
    useHooksContext,
} from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

/** @deprecated Use mutation hooks (useCreateXXX, useUpdateXXX, etc.) instead. */
export function useMutateCar() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Car', metadata);

    /** @deprecated Use `useCreateCar` hook instead. */
    async function createCar<T extends Prisma.CarCreateArgs>(args: Prisma.SelectSubset<T, Prisma.CarCreateArgs>) {
        return await request.mutationRequest<Prisma.CarGetPayload<Prisma.CarCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/car/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateCar` hook instead. */
    async function updateCar<T extends Prisma.CarUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.CarUpdateArgs>) {
        return await request.mutationRequest<Prisma.CarGetPayload<Prisma.CarUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/car/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyCar` hook instead. */
    async function updateManyCar<T extends Prisma.CarUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CarUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/car/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertCar` hook instead. */
    async function upsertCar<T extends Prisma.CarUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.CarUpsertArgs>) {
        return await request.mutationRequest<Prisma.CarGetPayload<Prisma.CarUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/car/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteCar` hook instead. */
    async function deleteCar<T extends Prisma.CarDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.CarDeleteArgs>) {
        return await request.mutationRequest<Prisma.CarGetPayload<Prisma.CarDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/car/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyCar` hook instead. */
    async function deleteManyCar<T extends Prisma.CarDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.CarDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/car/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createCar, updateCar, updateManyCar, upsertCar, deleteCar, deleteManyCar };
}

export function useCreateCar(
    options?: MutationOptions<Prisma.CarGetPayload<Prisma.CarCreateArgs> | undefined, unknown, Prisma.CarCreateArgs>,
) {
    const mutation = request.useModelMutation('Car', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CarCreateArgs>(args: Prisma.SelectSubset<T, Prisma.CarCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CarGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyCar<T extends Prisma.CarFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CarFindManyArgs>,
    options?: QueryOptions<Array<Prisma.CarGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Car', 'findMany', args, options);
}

export function useInfiniteFindManyCar<T extends Prisma.CarFindManyArgs, R extends Array<Prisma.CarGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.CarFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.CarGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Car', 'findMany', getNextArgs, options);
}

export function useFindUniqueCar<T extends Prisma.CarFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CarFindUniqueArgs>,
    options?: QueryOptions<Prisma.CarGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Car', 'findUnique', args, options);
}

export function useFindFirstCar<T extends Prisma.CarFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CarFindFirstArgs>,
    options?: QueryOptions<Prisma.CarGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Car', 'findFirst', args, options);
}

export function useUpdateCar(
    options?: MutationOptions<Prisma.CarGetPayload<Prisma.CarUpdateArgs> | undefined, unknown, Prisma.CarUpdateArgs>,
) {
    const mutation = request.useModelMutation('Car', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CarUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.CarUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CarGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyCar(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CarUpdateManyArgs>) {
    const mutation = request.useModelMutation('Car', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CarUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.CarUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertCar(
    options?: MutationOptions<Prisma.CarGetPayload<Prisma.CarUpsertArgs> | undefined, unknown, Prisma.CarUpsertArgs>,
) {
    const mutation = request.useModelMutation('Car', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CarUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.CarUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CarGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteCar(
    options?: MutationOptions<Prisma.CarGetPayload<Prisma.CarDeleteArgs> | undefined, unknown, Prisma.CarDeleteArgs>,
) {
    const mutation = request.useModelMutation('Car', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CarDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.CarDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CarGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyCar(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CarDeleteManyArgs>) {
    const mutation = request.useModelMutation('Car', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CarDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.CarDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateCar<T extends Prisma.CarAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.CarAggregateArgs>,
    options?: QueryOptions<Prisma.GetCarAggregateType<T>>,
) {
    return request.useModelQuery('Car', 'aggregate', args, options);
}

export function useGroupByCar<
    T extends Prisma.CarGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CarGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CarGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
              ? 'orderBy' extends Prisma.Keys<T>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.CarGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CarGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CarGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CarGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CarGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Car', 'groupBy', args, options);
}

export function useCountCar<T extends Prisma.CarCountArgs>(
    args?: Prisma.Subset<T, Prisma.CarCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CarCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Car', 'count', args, options);
}
