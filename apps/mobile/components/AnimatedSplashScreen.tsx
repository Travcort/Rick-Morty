import { useRef } from 'react';
import LottieView from 'lottie-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useColorScheme } from 'react-native';

const AnimatedSplashScreen = ({ onAnimationFinish }: { onAnimationFinish: (isCancelled: boolean) => void }) => {
    const animation = useRef<LottieView>(null);
    const customTheme = useColorScheme();
    const bg = customTheme === 'light' ? '#fff' : '#000000'

    return (
        <Animated.View 
            entering={FadeIn.springify()} 
            style={{ flex: 1, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }}
        >
            <LottieView
                autoPlay
                ref={animation}
                onAnimationFinish={onAnimationFinish}
                loop={false}
                style={{
                width: 200,
                height: 200,
                backgroundColor: customTheme === 'dark' ? '#000000' : '#fff',
                }}
                source={require('@/assets/lottie/rick.json')}
            />
        </Animated.View>
    )
}

export default AnimatedSplashScreen;