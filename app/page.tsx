import HomeView from '@/components/views/Home';
import LabAdvance from '@/components/views/LabAdvance';
import LabCableTesting from '@/components/views/LabCableTesting';
import LabWeb from '@/components/views/LabWeb';
import LabSecurity from '@/components/views/LabSecurity';
import LabNetworking from '@/components/views/LabNetworking';
import LabOS from '@/components/views/LabOS';
import LabPM from '@/components/views/LabPM';
import LabAutomation from '@/components/views/LabAutomation';
import LabUG from '@/components/views/LabUG';
import LabPG from '@/components/views/LabPG';
import LabPSP from '@/components/views/LabPSP';
import LabEM1 from '@/components/views/LabEM1';
import LabEM2 from '@/components/views/LabEM2';
import LabGrants from '@/components/views/LabGrants';

export default async function Home(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const searchParams = await props.searchParams;
    const view = typeof searchParams.view === 'string' ? searchParams.view : 'home';

    // Whitelist of allowed views to prevent LFI equivalent
    // We will expand this list as we migrate more pages
    const allowedViews = ['home', 'lab_advance', 'lab_Cable_Testing', 'lab_web', 'lab_security', 'lab_networking', 'lab_os', 'lab_pm', 'lab_automation', 'lab_ug', 'lab_pg', 'lab_psp', 'lab_em1', 'lab_em2', 'lab_grants'];

    if (!allowedViews.includes(view)) {
        return <div>Page Not Found</div>;
    }

    if (view === 'home') {
        return <HomeView />;
    }

    if (view === 'lab_advance') {
        return <LabAdvance />;
    }

    if (view === 'lab_Cable_Testing') {
        return <LabCableTesting />;
    }

    if (view === 'lab_web') {
        return <LabWeb />;
    }

    if (view === 'lab_security') {
        return <LabSecurity />;
    }

    if (view === 'lab_networking') {
        return <LabNetworking />;
    }

    if (view === 'lab_os') {
        return <LabOS />;
    }

    if (view === 'lab_pm') {
        return <LabPM />;
    }

    if (view === 'lab_automation') {
        return <LabAutomation />;
    }

    if (view === 'lab_ug') {
        return <LabUG />;
    }

    if (view === 'lab_pg') {
        return <LabPG />;
    }

    if (view === 'lab_psp') {
        return <LabPSP />;
    }

    if (view === 'lab_em1') {
        return <LabEM1 />;
    }

    if (view === 'lab_em2') {
        return <LabEM2 />;
    }

    if (view === 'lab_grants') {
        return <LabGrants />;
    }

    return (
        <main className="container" style={{ marginTop: '100px' }}>
            <h1>Page: {view}</h1>
            <p>This page has not been migrated yet.</p>
        </main>
    )
}
