import { useRef } from "react"
import { router } from "expo-router"
import { Text, useWindowDimensions } from "react-native"
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { Place, PlaceProps } from "../place"
import { s } from "./styles"

type Props = {
    data: PlaceProps[]
}

export function Places({data}: Props) {
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    // altura default e altura default qnd arrasta p cima
    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    }

    return (
        <BottomSheet 
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Place 
                        data={item} 
                        onPress={() => router.navigate(`/market/${item.id}`)} 
                    />
                )}
                contentContainerStyle={s.content}
                ListHeaderComponent={() => (
                    <Text style={s.title}>Explore locais perto de você</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}