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
export function useMutateMotorcycle() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Motorcycle', metadata);

    /** @deprecated Use `useCreateMotorcycle` hook instead. */
    async function createMotorcycle<T extends Prisma.MotorcycleCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.MotorcycleCreateArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.MotorcycleGetPayload<Prisma.MotorcycleCreateArgs> | undefined,
            true
        >('POST', `${endpoint}/motorcycle/create`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useUpdateMotorcycle` hook instead. */
    async function updateMotorcycle<T extends Prisma.MotorcycleUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.MotorcycleUpdateArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.MotorcycleGetPayload<Prisma.MotorcycleUpdateArgs> | undefined,
            true
        >('PUT', `${endpoint}/motorcycle/update`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useUpdateManyMotorcycle` hook instead. */
    async function updateManyMotorcycle<T extends Prisma.MotorcycleUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.MotorcycleUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/motorcycle/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertMotorcycle` hook instead. */
    async function upsertMotorcycle<T extends Prisma.MotorcycleUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.MotorcycleUpsertArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.MotorcycleGetPayload<Prisma.MotorcycleUpsertArgs> | undefined,
            true
        >('POST', `${endpoint}/motorcycle/upsert`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useDeleteMotorcycle` hook instead. */
    async function deleteMotorcycle<T extends Prisma.MotorcycleDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.MotorcycleDeleteArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.MotorcycleGetPayload<Prisma.MotorcycleDeleteArgs> | undefined,
            true
        >('DELETE', `${endpoint}/motorcycle/delete`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useDeleteManyMotorcycle` hook instead. */
    async function deleteManyMotorcycle<T extends Prisma.MotorcycleDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.MotorcycleDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/motorcycle/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return {
        createMotorcycle,
        updateMotorcycle,
        updateManyMotorcycle,
        upsertMotorcycle,
        deleteMotorcycle,
        deleteManyMotorcycle,
    };
}

export function useCreateMotorcycle(
    options?: MutationOptions<
        Prisma.MotorcycleGetPayload<Prisma.MotorcycleCreateArgs> | undefined,
        unknown,
        Prisma.MotorcycleCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Motorcycle', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.MotorcycleCreateArgs>(args: Prisma.SelectSubset<T, Prisma.MotorcycleCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.MotorcycleGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyMotorcycle<T extends Prisma.MotorcycleFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.MotorcycleFindManyArgs>,
    options?: QueryOptions<Array<Prisma.MotorcycleGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Motorcycle', 'findMany', args, options);
}

export function useInfiniteFindManyMotorcycle<
    T extends Prisma.MotorcycleFindManyArgs,
    R extends Array<Prisma.MotorcycleGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.MotorcycleFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.MotorcycleGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Motorcycle', 'findMany', getNextArgs, options);
}

export function useFindUniqueMotorcycle<T extends Prisma.MotorcycleFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.MotorcycleFindUniqueArgs>,
    options?: QueryOptions<Prisma.MotorcycleGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Motorcycle', 'findUnique', args, options);
}

export function useFindFirstMotorcycle<T extends Prisma.MotorcycleFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.MotorcycleFindFirstArgs>,
    options?: QueryOptions<Prisma.MotorcycleGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Motorcycle', 'findFirst', args, options);
}

export function useUpdateMotorcycle(
    options?: MutationOptions<
        Prisma.MotorcycleGetPayload<Prisma.MotorcycleUpdateArgs> | undefined,
        unknown,
        Prisma.MotorcycleUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Motorcycle', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.MotorcycleUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.MotorcycleUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.MotorcycleGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyMotorcycle(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.MotorcycleUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Motorcycle', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.MotorcycleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.MotorcycleUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertMotorcycle(
    options?: MutationOptions<
        Prisma.MotorcycleGetPayload<Prisma.MotorcycleUpsertArgs> | undefined,
        unknown,
        Prisma.MotorcycleUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Motorcycle', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.MotorcycleUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.MotorcycleUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.MotorcycleGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteMotorcycle(
    options?: MutationOptions<
        Prisma.MotorcycleGetPayload<Prisma.MotorcycleDeleteArgs> | undefined,
        unknown,
        Prisma.MotorcycleDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Motorcycle', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.MotorcycleDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.MotorcycleDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.MotorcycleGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyMotorcycle(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.MotorcycleDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Motorcycle', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.MotorcycleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.MotorcycleDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateMotorcycle<T extends Prisma.MotorcycleAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.MotorcycleAggregateArgs>,
    options?: QueryOptions<Prisma.GetMotorcycleAggregateType<T>>,
) {
    return request.useModelQuery('Motorcycle', 'aggregate', args, options);
}

export function useGroupByMotorcycle<
    T extends Prisma.MotorcycleGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.MotorcycleGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.MotorcycleGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.MotorcycleGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.MotorcycleGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.MotorcycleGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.MotorcycleGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.MotorcycleGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Motorcycle', 'groupBy', args, options);
}

export function useCountMotorcycle<T extends Prisma.MotorcycleCountArgs>(
    args?: Prisma.Subset<T, Prisma.MotorcycleCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MotorcycleCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Motorcycle', 'count', args, options);
}
