/* eslint-disable */
const metadata = {
    models: {
        user: {
            name: 'User',
            fields: {
                id: {
                    name: 'id',
                    type: 'Int',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                    isAutoIncrement: true,
                },
                contents: {
                    name: 'contents',
                    type: 'Content',
                    isDataModel: true,
                    isArray: true,
                    backLink: 'owner',
                },
                vehicle: {
                    name: 'vehicle',
                    type: 'Vehicle',
                    isDataModel: true,
                    isArray: true,
                    backLink: 'creator',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        content: {
            name: 'Content',
            fields: {
                id: {
                    name: 'id',
                    type: 'Int',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                    isAutoIncrement: true,
                },
                createdAt: {
                    name: 'createdAt',
                    type: 'DateTime',
                    attributes: [{ name: '@default', args: [] }],
                },
                updatedAt: {
                    name: 'updatedAt',
                    type: 'DateTime',
                    attributes: [{ name: '@updatedAt', args: [] }],
                },
                owner: {
                    name: 'owner',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'contents',
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'ownerId' },
                },
                ownerId: {
                    name: 'ownerId',
                    type: 'Int',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Content$ownerId,
                },
                published: {
                    name: 'published',
                    type: 'Boolean',
                    attributes: [{ name: '@default', args: [{ value: false }] }],
                },
                contentType: {
                    name: 'contentType',
                    type: 'String',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
            discriminator: 'contentType',
        },
        post: {
            name: 'Post',
            baseTypes: ['Content'],
            fields: {
                id: {
                    name: 'id',
                    type: 'Int',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                    isAutoIncrement: true,
                },
                createdAt: {
                    name: 'createdAt',
                    type: 'DateTime',
                    attributes: [{ name: '@default', args: [] }],
                    inheritedFrom: 'Content',
                },
                updatedAt: {
                    name: 'updatedAt',
                    type: 'DateTime',
                    attributes: [{ name: '@updatedAt', args: [] }],
                    inheritedFrom: 'Content',
                },
                owner: {
                    name: 'owner',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'ownerId' },
                    inheritedFrom: 'Content',
                },
                ownerId: {
                    name: 'ownerId',
                    type: 'Int',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Post$ownerId,
                    inheritedFrom: 'Content',
                },
                published: {
                    name: 'published',
                    type: 'Boolean',
                    attributes: [{ name: '@default', args: [{ value: false }] }],
                    inheritedFrom: 'Content',
                },
                contentType: {
                    name: 'contentType',
                    type: 'String',
                    inheritedFrom: 'Content',
                },
                title: {
                    name: 'title',
                    type: 'String',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        video: {
            name: 'Video',
            baseTypes: ['Content'],
            fields: {
                id: {
                    name: 'id',
                    type: 'Int',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                    isAutoIncrement: true,
                },
                createdAt: {
                    name: 'createdAt',
                    type: 'DateTime',
                    attributes: [{ name: '@default', args: [] }],
                    inheritedFrom: 'Content',
                },
                updatedAt: {
                    name: 'updatedAt',
                    type: 'DateTime',
                    attributes: [{ name: '@updatedAt', args: [] }],
                    inheritedFrom: 'Content',
                },
                owner: {
                    name: 'owner',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'ownerId' },
                    inheritedFrom: 'Content',
                },
                ownerId: {
                    name: 'ownerId',
                    type: 'Int',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Video$ownerId,
                    inheritedFrom: 'Content',
                },
                published: {
                    name: 'published',
                    type: 'Boolean',
                    attributes: [{ name: '@default', args: [{ value: false }] }],
                    inheritedFrom: 'Content',
                },
                contentType: {
                    name: 'contentType',
                    type: 'String',
                    inheritedFrom: 'Content',
                },
                name: {
                    name: 'name',
                    type: 'String',
                },
                duration: {
                    name: 'duration',
                    type: 'Int',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        vehicle: {
            name: 'Vehicle',
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                model: {
                    name: 'model',
                    type: 'String',
                },
                year: {
                    name: 'year',
                    type: 'Int',
                },
                type: {
                    name: 'type',
                    type: 'String',
                },
                creator: {
                    name: 'creator',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'vehicle',
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'Int',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Vehicle$createdBy,
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
            discriminator: 'type',
        },
        car: {
            name: 'Car',
            baseTypes: ['Vehicle'],
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                model: {
                    name: 'model',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                year: {
                    name: 'year',
                    type: 'Int',
                    inheritedFrom: 'Vehicle',
                },
                type: {
                    name: 'type',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                creator: {
                    name: 'creator',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                    inheritedFrom: 'Vehicle',
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'Int',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Car$createdBy,
                    inheritedFrom: 'Vehicle',
                },
                isConvertible: {
                    name: 'isConvertible',
                    type: 'Boolean',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        motorcycle: {
            name: 'Motorcycle',
            baseTypes: ['Vehicle'],
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                model: {
                    name: 'model',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                year: {
                    name: 'year',
                    type: 'Int',
                    inheritedFrom: 'Vehicle',
                },
                type: {
                    name: 'type',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                creator: {
                    name: 'creator',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                    inheritedFrom: 'Vehicle',
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'Int',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Motorcycle$createdBy,
                    inheritedFrom: 'Vehicle',
                },
                hasHeatedGrips: {
                    name: 'hasHeatedGrips',
                    type: 'Boolean',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
    },
    deleteCascade: {
        user: ['Content', 'Post', 'Video'],
    },
    authModel: 'User',
};
function $default$Content$ownerId(user: any): unknown {
    return user?.id;
}

function $default$Post$ownerId(user: any): unknown {
    return user?.id;
}

function $default$Video$ownerId(user: any): unknown {
    return user?.id;
}

function $default$Vehicle$createdBy(user: any): unknown {
    return user?.id;
}

function $default$Car$createdBy(user: any): unknown {
    return user?.id;
}

function $default$Motorcycle$createdBy(user: any): unknown {
    return user?.id;
}
export default metadata;
