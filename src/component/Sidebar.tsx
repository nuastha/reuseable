import { useKindeAuth } from "@kinde-oss/kinde-auth-react"
import Button from "./Button"
import ToDoForm from "./ToDoForm"

export default function Sidebar() {
    const { login, register, isAuthenticated, logout, user, isLoading } = useKindeAuth()
    return (
        <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
            <ToDoForm />
            <div className="flex flex-col space-y-2 mt-auto">
                {isLoading ? (null) : (isAuthenticated ? (<>
                    <p className="text-sm">Welcome, {user?.email}</p>
                    <Button buttonType="secondary" type="button" onClick={logout}>log out</Button>
                </>
                ) : (
                    <>
                        <Button buttonType="secondary" type="button" onClick={login}>log in</Button>
                        <Button buttonType="secondary" type="button" onClick={register}>sign up</Button>
                    </>
                ))}
            </div>
        </section>
    )
}