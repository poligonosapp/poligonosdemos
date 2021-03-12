import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { PolygonObject } from 'graphql-geojson';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            polygon: {
                type: PolygonObject,
                resolve: () => ({
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-109, 41],
                            [-102, 41],
                            [-102, 37],
                            [-109, 37],
                            [-109, 41],
                        ],
                    ],
                }),
            },
        }),
    }),
});
