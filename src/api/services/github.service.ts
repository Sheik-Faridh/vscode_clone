import { Octokit } from 'octokit';

export default class GithubService {
  private static gh = new Octokit({ auth: process.env.PERSONAL_ACCESS_TOKEN });

  static async getAllFiles() {
    try {
      const res = await this.gh.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1', {
        owner: process.env.OWNER,
        repo: process.env.REPO,
        tree_sha: process.env.REPO_BRANCH,
      });
      return res.data.tree;
    } catch (error) {
      console.log(error);
    }
  }

  static async getFileContent(path: string) {
    try {
      const res = await this.gh.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: process.env.OWNER,
        repo: process.env.REPO,
        path,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
