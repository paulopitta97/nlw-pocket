import { colors } from "@/styles/theme"
import { IconProps } from "@tabler/icons-react-native"
import { Text, View } from "react-native"
import { s } from "./styles"

type Props = {
    description: string
    icon: React.ComponentType<IconProps>
}

// Renomeando o "icon" para "Icon"
export function Info({icon: Icon, description}: Props) {
    return (
        <View style={s.container}>
            <Icon size={16} color={colors.gray[100]} />
            <Text style={s.text}>{description}</Text>
        </View>
    )
}
