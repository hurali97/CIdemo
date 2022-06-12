import { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * We could make use of typed navigation. This would help us in type-safing
 * our props and navigation. We created a separate file because this would
 * help in annotating type manually in other places.
 *
 * @link https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
    HomeScreen: undefined;
    DetailScreen: { name: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
