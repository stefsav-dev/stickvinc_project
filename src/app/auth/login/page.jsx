import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
    return (
        <Card className="mx-auto max-w-sm border-0 shadow-none mt-4 sm:mt-12 sm:border sm:shadow-sm md:mt-20 lg:mt-24 xl:mt-28">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email to login your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="email">Email</label>
                        <Input id="email" name="email" placeholder="@example.com"/>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                                <Link href="/auth/forgot" className="ml-auto inline-block text-sm underline">
                                    Forgot Your Password?
                                </Link>
                        </div>
                        <Input id="password" name="password" type="password"/>
                    </div>
                    <Button>Login</Button>
                </div>
                <div className='mt-4 text-center text-sm'>
                    Don&apos;t have an account?{' '}
                    <Link href='/auth/register' className='underline'>
                        Register
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}