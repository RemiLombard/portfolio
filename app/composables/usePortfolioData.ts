import type { Project, Experience, Skill, Profile } from '~/types/database'

export const usePortfolioData = () => {
  const supabase = useSupabaseClient()

  // Récupérer le profil
  const getProfile = async (): Promise<Profile | null> => {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .single()
    
    if (error) {
      console.error('Erreur lors de la récupération du profil:', error)
      return null
    }
    return data
  }

  // Récupérer tous les projets
  const getProjects = async (featured?: boolean): Promise<Project[]> => {
    let query = supabase
      .from('projects')
      .select('*')
      .order('order', { ascending: true })
    
    if (featured !== undefined) {
      query = query.eq('featured', featured)
    }
    
    const { data, error } = await query
    
    if (error) {
      console.error('Erreur lors de la récupération des projets:', error)
      return []
    }
    return data || []
  }

  // Récupérer un projet par slug
  const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) {
      console.error('Erreur lors de la récupération du projet:', error)
      return null
    }
    return data
  }

  // Récupérer les expériences
  const getExperiences = async (type?: 'work' | 'education'): Promise<Experience[]> => {
    let query = supabase
      .from('experiences')
      .select('*')
      .order('order', { ascending: true })
    
    if (type) {
      query = query.eq('type', type)
    }
    
    const { data, error } = await query
    
    if (error) {
      console.error('Erreur lors de la récupération des expériences:', error)
      return []
    }
    return data || []
  }

  // Récupérer les compétences
  const getSkills = async (category?: string): Promise<Skill[]> => {
    let query = supabase
      .from('skills')
      .select('*')
      .order('order', { ascending: true })
    
    if (category) {
      query = query.eq('category', category)
    }
    
    const { data, error } = await query
    
    if (error) {
      console.error('Erreur lors de la récupération des compétences:', error)
      return []
    }
    return data || []
  }

  return {
    getProfile,
    getProjects,
    getProjectBySlug,
    getExperiences,
    getSkills
  }
}
