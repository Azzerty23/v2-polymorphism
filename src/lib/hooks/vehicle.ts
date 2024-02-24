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
export function useMutateVehicle() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Vehicle', metadata);

    /** @deprecated Use `useCreateVehicle` hook instead. */
    async function createVehicle<T extends Prisma.VehicleCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VehicleCreateArgs>,
    ) {
        return await request.mutationRequest<Prisma.VehicleGetPayload<Prisma.VehicleCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/vehicle/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateVehicle` hook instead. */
    async function updateVehicle<T extends Prisma.VehicleUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VehicleUpdateArgs>,
    ) {
        return await request.mutationRequest<Prisma.VehicleGetPayload<Prisma.VehicleUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/vehicle/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyVehicle` hook instead. */
    async function updateManyVehicle<T extends Prisma.VehicleUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VehicleUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/vehicle/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertVehicle` hook instead. */
    async function upsertVehicle<T extends Prisma.VehicleUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.VehicleUpsertArgs>,
    ) {
        return await request.mutationRequest<Prisma.VehicleGetPayload<Prisma.VehicleUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/vehicle/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteVehicle` hook instead. */
    async function deleteVehicle<T extends Prisma.VehicleDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.VehicleDeleteArgs>,
    ) {
        return await request.mutationRequest<Prisma.VehicleGetPayload<Prisma.VehicleDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/vehicle/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyVehicle` hook instead. */
    async function deleteManyVehicle<T extends Prisma.VehicleDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VehicleDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/vehicle/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createVehicle, updateVehicle, updateManyVehicle, upsertVehicle, deleteVehicle, deleteManyVehicle };
}

export function useCreateVehicle(
    options?: MutationOptions<
        Prisma.VehicleGetPayload<Prisma.VehicleCreateArgs> | undefined,
        unknown,
        Prisma.VehicleCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Vehicle', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VehicleCreateArgs>(args: Prisma.SelectSubset<T, Prisma.VehicleCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VehicleGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyVehicle<T extends Prisma.VehicleFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VehicleFindManyArgs>,
    options?: QueryOptions<Array<Prisma.VehicleGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Vehicle', 'findMany', args, options);
}

export function useInfiniteFindManyVehicle<
    T extends Prisma.VehicleFindManyArgs,
    R extends Array<Prisma.VehicleGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.VehicleFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.VehicleGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Vehicle', 'findMany', getNextArgs, options);
}

export function useFindUniqueVehicle<T extends Prisma.VehicleFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VehicleFindUniqueArgs>,
    options?: QueryOptions<Prisma.VehicleGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Vehicle', 'findUnique', args, options);
}

export function useFindFirstVehicle<T extends Prisma.VehicleFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VehicleFindFirstArgs>,
    options?: QueryOptions<Prisma.VehicleGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Vehicle', 'findFirst', args, options);
}

export function useUpdateVehicle(
    options?: MutationOptions<
        Prisma.VehicleGetPayload<Prisma.VehicleUpdateArgs> | undefined,
        unknown,
        Prisma.VehicleUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Vehicle', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VehicleUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.VehicleUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VehicleGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyVehicle(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VehicleUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Vehicle', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VehicleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VehicleUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertVehicle(
    options?: MutationOptions<
        Prisma.VehicleGetPayload<Prisma.VehicleUpsertArgs> | undefined,
        unknown,
        Prisma.VehicleUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Vehicle', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VehicleUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.VehicleUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VehicleGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteVehicle(
    options?: MutationOptions<
        Prisma.VehicleGetPayload<Prisma.VehicleDeleteArgs> | undefined,
        unknown,
        Prisma.VehicleDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Vehicle', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VehicleDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.VehicleDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VehicleGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyVehicle(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VehicleDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Vehicle', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VehicleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VehicleDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateVehicle<T extends Prisma.VehicleAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.VehicleAggregateArgs>,
    options?: QueryOptions<Prisma.GetVehicleAggregateType<T>>,
) {
    return request.useModelQuery('Vehicle', 'aggregate', args, options);
}

export function useGroupByVehicle<
    T extends Prisma.VehicleGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VehicleGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VehicleGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.VehicleGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.VehicleGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.VehicleGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.VehicleGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.VehicleGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Vehicle', 'groupBy', args, options);
}

export function useCountVehicle<T extends Prisma.VehicleCountArgs>(
    args?: Prisma.Subset<T, Prisma.VehicleCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VehicleCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Vehicle', 'count', args, options);
}
