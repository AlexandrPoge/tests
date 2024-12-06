import { Stack } from 'expo-router';

const EmployeeLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="/screen/EmployeeListScreen" options={{ headerShown: false }} />

            </Stack>
        </>
    );
};
export default EmployeeLayout;
