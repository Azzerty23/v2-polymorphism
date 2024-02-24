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
export function useMutateVideo() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Video', metadata);

    /** @deprecated Use `useCreateVideo` hook instead. */
    async function createVideo<T extends Prisma.VideoCreateArgs>(args: Prisma.SelectSubset<T, Prisma.VideoCreateArgs>) {
        return await request.mutationRequest<Prisma.VideoGetPayload<Prisma.VideoCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/video/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateVideo` hook instead. */
    async function updateVideo<T extends Prisma.VideoUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.VideoUpdateArgs>) {
        return await request.mutationRequest<Prisma.VideoGetPayload<Prisma.VideoUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/video/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyVideo` hook instead. */
    async function updateManyVideo<T extends Prisma.VideoUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VideoUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/video/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertVideo` hook instead. */
    async function upsertVideo<T extends Prisma.VideoUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.VideoUpsertArgs>) {
        return await request.mutationRequest<Prisma.VideoGetPayload<Prisma.VideoUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/video/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteVideo` hook instead. */
    async function deleteVideo<T extends Prisma.VideoDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.VideoDeleteArgs>) {
        return await request.mutationRequest<Prisma.VideoGetPayload<Prisma.VideoDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/video/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyVideo` hook instead. */
    async function deleteManyVideo<T extends Prisma.VideoDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VideoDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/video/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createVideo, updateVideo, updateManyVideo, upsertVideo, deleteVideo, deleteManyVideo };
}

export function useCreateVideo(
    options?: MutationOptions<
        Prisma.VideoGetPayload<Prisma.VideoCreateArgs> | undefined,
        unknown,
        Prisma.VideoCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Video', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VideoCreateArgs>(args: Prisma.SelectSubset<T, Prisma.VideoCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VideoGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyVideo<T extends Prisma.VideoFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VideoFindManyArgs>,
    options?: QueryOptions<Array<Prisma.VideoGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Video', 'findMany', args, options);
}

export function useInfiniteFindManyVideo<
    T extends Prisma.VideoFindManyArgs,
    R extends Array<Prisma.VideoGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.VideoFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.VideoGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Video', 'findMany', getNextArgs, options);
}

export function useFindUniqueVideo<T extends Prisma.VideoFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VideoFindUniqueArgs>,
    options?: QueryOptions<Prisma.VideoGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Video', 'findUnique', args, options);
}

export function useFindFirstVideo<T extends Prisma.VideoFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VideoFindFirstArgs>,
    options?: QueryOptions<Prisma.VideoGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Video', 'findFirst', args, options);
}

export function useUpdateVideo(
    options?: MutationOptions<
        Prisma.VideoGetPayload<Prisma.VideoUpdateArgs> | undefined,
        unknown,
        Prisma.VideoUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Video', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VideoUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.VideoUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VideoGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyVideo(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Video', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VideoUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.VideoUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertVideo(
    options?: MutationOptions<
        Prisma.VideoGetPayload<Prisma.VideoUpsertArgs> | undefined,
        unknown,
        Prisma.VideoUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Video', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VideoUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.VideoUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VideoGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteVideo(
    options?: MutationOptions<
        Prisma.VideoGetPayload<Prisma.VideoDeleteArgs> | undefined,
        unknown,
        Prisma.VideoDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Video', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VideoDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.VideoDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VideoGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyVideo(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VideoDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Video', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VideoDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.VideoDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateVideo<T extends Prisma.VideoAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.VideoAggregateArgs>,
    options?: QueryOptions<Prisma.GetVideoAggregateType<T>>,
) {
    return request.useModelQuery('Video', 'aggregate', args, options);
}

export function useGroupByVideo<
    T extends Prisma.VideoGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VideoGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VideoGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.VideoGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.VideoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.VideoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.VideoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.VideoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Video', 'groupBy', args, options);
}

export function useCountVideo<T extends Prisma.VideoCountArgs>(
    args?: Prisma.Subset<T, Prisma.VideoCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VideoCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Video', 'count', args, options);
}
