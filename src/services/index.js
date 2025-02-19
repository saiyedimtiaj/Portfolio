"use server";
export const getSkills = async () => {
  try {
    const data = await fetch(
      "https://portfolio-dashboard-zeta.vercel.app/api/get-skill",
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    return data.json();
  } catch (err) {
    return err;
  }
};
export const getBlogs = async () => {
  try {
    const data = await fetch(
      "https://portfolio-dashboard-zeta.vercel.app/api/get-blog",
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    return data.json();
  } catch (err) {
    return err;
  }
};
export const getSingleBlogs = async (id) => {
  try {
    const data = await fetch(
      `https://portfolio-dashboard-zeta.vercel.app/api/get-blog/${id}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    return data.json();
  } catch (err) {
    return err;
  }
};
export const getAllProject = async () => {
  try {
    const data = await fetch(
      `https://portfolio-dashboard-zeta.vercel.app/api/get-project`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    return data.json();
  } catch (err) {
    return err;
  }
};

export const getSingleProject = async (id) => {
  try {
    const data = await fetch(
      `https://portfolio-dashboard-zeta.vercel.app/api/get-project/${id}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    return data.json();
  } catch (err) {
    return err;
  }
};
