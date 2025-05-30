import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/extra/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/extra/SearchInput";
import SubjectFilter from "@/components/extra/SubjectFilter";
import CompanionsList from "@/components/extra/CompanionsList";
import CTA from "@/components/extra/CTA";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    // For filtered companions (from search)
    const companions = await getAllCompanions({ subject, topic });
    
    // For popular companions section
    const popularCompanions = await getAllCompanions({ limit: 3 });
    
    // For recent sessions
    const recentSessionsCompanions = await getRecentSessions(10);

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>
            
            <h1>Popular Companions</h1>
            <section className="home-section">
                {popularCompanions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
            
            {/* <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section> */}
            
            <section className="home-section">
                <CompanionsList
                    title="Recently completed sessions"
                    companions={recentSessionsCompanions}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    )
}

export default CompanionsLibrary