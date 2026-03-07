import type { Project } from "~/types/project";

export const useProjects = () => {
  const supabase = useSupabaseClient();

  const projects = ref<Project[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchProjects = async () => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await supabase
        .from("projects")
        .select("*")
        .order("order", { ascending: true });

      if (fetchError) throw fetchError;

      projects.value = data as Project[];
    } catch (e: any) {
      error.value = e.message;
      console.error("Erreur lors du chargement des projets:", e);
    } finally {
      loading.value = false;
    }
  };

  const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    try {
      const { data, error: fetchError } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();

      if (fetchError) throw fetchError;

      return data as Project;
    } catch (e: any) {
      console.error("Erreur lors du chargement du projet:", e);
      return null;
    }
  };

  return {
    projects,
    loading,
    error,
    fetchProjects,
    getProjectBySlug,
  };
};
