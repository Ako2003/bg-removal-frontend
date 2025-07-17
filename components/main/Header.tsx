"use client"
import { Layers, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Header () {
    const [profileOpen, setProfileOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="/#" className="flex items-center space-x-3">
                        <div
                            className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Layers className="w-6 h-6 text-white"/>
                        </div>
                        <span
                            className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                            BgStudio
                          </span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        <div onMouseEnter={() => setProfileOpen(true)}
                             onMouseLeave={() => setProfileOpen(false)}>
                            <DropdownMenu open={profileOpen} onOpenChange={setProfileOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost">
                                        Tools
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-fit">
                                    <DropdownMenuGroup>
                                        <a href="/remove-background">
                                            <DropdownMenuItem className="p-3">
                                                <span>Remove Background</span>
                                            </DropdownMenuItem>
                                        </a>
                                        {/*<a href="/custom-background">*/}
                                        {/*    <DropdownMenuItem className="p-3">*/}
                                        {/*        <span>Add Custom Background</span>*/}
                                        {/*    </DropdownMenuItem>*/}
                                        {/*</a>*/}
                                        <a href="/blur-background">
                                            <DropdownMenuItem className="p-3">
                                                <span>Add Blur To Background</span>
                                            </DropdownMenuItem>
                                        </a>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <a href="#results" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Results</a>
                        <a href="#testimonials"
                           className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Reviews</a>
                        <a href="#faq" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">FAQ</a>
                    </nav>
                    {/*<Button*/}
                    {/*    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">*/}
                    {/*    Get Started Free*/}
                    {/*</Button>*/}
                </div>
            </div>
        </header>
    )
}