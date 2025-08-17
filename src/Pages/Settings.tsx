import { useMemo } from "react"
import Button from "../Components/Button"
import Input from "../Components/Input"
import Label from "../Components/Label"
import PrimaryHeading from "../Components/PrimaryHeading"
import SecondaryHeading from "../Components/SecondaryHeading"
import CardWrapper from "../Wrappers/CardWrapper"
import Pill from "../Components/Pill"
import Dropdown, { type DropDownOption } from "../Components/Dropdown"


const Settings = () => {

    const pills: string[] = useMemo((): string[] => {
        return ["Export Student Data", "Export School Reports", "Export Analytics"];
    }, []);

    const date: Date = useMemo(():  Date => {
        return new Date();
    }, []);

    const language: DropDownOption[] = useMemo(() => {
        return [{
            value: "english",
            label: "English"
        }, {
            value: "hindi",
            label: "Hindi",
        }, {
            value: "punjabi",
            label: "Punjabi",
        }]
    }, []);

    const timeZone: DropDownOption[] = useMemo(() => {
        return [{
            value: "UTC-5 (EastTime)",
            label: "UTC-5 (EastTime)",
        }]
    }, []);

    return (
        <CardWrapper className="rounded-none shadow-none flex flex-col gap-y-10 md:basis-[80%] overflow-scroll pl-4 pr-4 pt-6 sm:basis-full grow-1">
            <PrimaryHeading heading="Settings" className="text-primary-heading text-2xl font-bold" />

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <CardWrapper className="flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-1">
                        <PrimaryHeading heading="Profile Settings" className="font-bold text-lg" />
                        <SecondaryHeading heading="Update your personal information and contact details" className="text-gray-500 font-light text-sm" />
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <Label htmlFor="fullname" className="text-primary-heading text-sm font-normal">
                                Full Name
                            </Label>
                            <Input type="text" id="fullname" placeholder="Admin User" className="rounded-md outline-2 outline-gray-200 outline-offset-0 outline-solid px-2 py-1 placeholder:text-gray-500" />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label htmlFor="email" className="text-primary-heading text-sm font-normal">
                                Email
                            </Label>
                            <Input type="email" id="email" placeholder="admin@example.com" className="rounded-md outline-2 outline-gray-200 outline-offset-0 outline-solid px-2 py-1 placeholder:text-gray-500" />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label htmlFor="phone" className="text-primary-heading text-sm font-normal">
                                Phone
                            </Label>
                            <Input type="text" id="phone" placeholder="+1-555-020" className="rounded-md outline-2 outline-gray-200 outline-offset-0 outline-solid px-2 py-1 placeholder:text-gray-500" />
                        </div>

                        <Button title="Update Profile" className="self-start cursor-pointer" />
                    </div>

                </CardWrapper>

                <CardWrapper className="flex flex-col gap-y-8">
                    <div>
                        <PrimaryHeading heading="System Settings" className="font-bold text-lg" />
                        <SecondaryHeading heading="Configure system preferences and default options" className="text-gray-500 font-light text-sm" />
                    </div>

                    <div className="flex flex-col gap-y-4">

                        <div className="flex flex-col gap-y-2">
                            <Label htmlFor="language" className="text-gray-500 text-sm">
                                Default Language
                            </Label>

                            <Dropdown className="rounded-md outline-2 outline-gray-200 outline-offset-0 outline-solid px-2 py-1 placeholder:text-gray-500" id="language" options={language} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label htmlFor="timezone" className="text-gray-500 text-sm">
                                Time Zone
                            </Label>

                            <Dropdown className="rounded-md outline-2 outline-gray-200 outline-offset-0 outline-solid px-2 py-1 placeholder:text-gray-500" id="timezone" options={timeZone} />
                        </div>

                        <Button title="Save Settings" className="self-start cursor-pointer" />

                    </div>
                </CardWrapper>


                <CardWrapper className="flex flex-col gap-y-8 box-content">
                    <div className="flex flex-col gap-y-1">
                        <PrimaryHeading heading="Notification Preferences" className="font-bold text-lg" />
                        <SecondaryHeading heading="Manage how and when you recieve notification" className="text-gray-500 font-light text-sm" />
                    </div>

                    <div className="flex flex-col gap-y-4">

                        <div className="flex flex-row justify-between">
                            <Label htmlFor="email-notifications">
                                <PrimaryHeading heading="Email Notifications" />
                                <SecondaryHeading heading="Recieve updates via email" />
                            </Label>

                            <Input type="checkbox" id="email-notifications" className="cursor-pointer" />
                        </div>

                        <div className="flex flex-row justify-between">
                            <Label htmlFor="performance-reports">
                                <PrimaryHeading heading="Performance Reports" />
                                <SecondaryHeading heading="Weekly performance summaries " />
                            </Label>

                            <Input type="checkbox" id="performance-reports" className="cursor-pointer" />
                        </div>

                        <div className="flex flex-row justify-between">
                            <Label htmlFor="new-school-alerts">
                                <PrimaryHeading heading="New School Alerts" />
                                <SecondaryHeading heading="Notifications for new school registrations" />
                            </Label>

                            <Input type="checkbox" id="new-school-alerts" className="cursor-pointer" />
                        </div>


                    </div>

                </CardWrapper>


                <CardWrapper className="flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-1">
                        <PrimaryHeading heading="Data Management" className="font-bold text-lg" />
                        <SecondaryHeading heading="Export date and manage system backups" />
                    </div>

                    <div className="flex flex-col gap-y-4">

                        <div className="flex flex-col gap-y-2">
                            <PrimaryHeading heading="Export Data" />

                            <div className="flex flex-row flex-wrap gap-x-1 gap-y-2">
                                {pills.map((p, i) => <Pill title={p} key={i} />)}
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <PrimaryHeading heading="Backup" />

                            <div className="flex flex-row flex-wrap gap-x-1 gap-y-2">
                                <Pill className="text-sm" title="Create Backup"/>
                            </div>

                            <div>
                                <SecondaryHeading heading={`Last backup: ${date.getDate()}, March, ${date.getFullYear()} `}/>
                            </div>
                        </div>


                    </div>

                </CardWrapper>
            </div>
        </CardWrapper>
    )
}


export default Settings