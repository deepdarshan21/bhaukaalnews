# Syncing a fork ☘️ :
<p align="center"><img src="../images/sync1.png"></p>
<br>

* 1 open command prompt 



* 2 Change the current working directory to your local project.


* 3 Fetch the branches and their respective commits from the upstream repository. Commits to master will be stored in a local branch, upstream/master.
    ```
         git fetch upstream
    > remote: Counting objects: 75, done.
    > remote: Compressing objects: 100% (53/53), done.
    > remote: Total 62 (delta 27), reused 44 (delta 9)
    > Unpacking objects: 100% (62/62), done.
    > From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
    >  * [new branch]      master     -> upstream/master
    ```
* 4 Check out your fork's local master branch.
    ```
         git checkout master
    > Switched to branch 'master'
    ```
* 5 Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes.
    ```
        git merge upstream/master
    > Updating a422352..5fdff0f
    > Fast-forward
    >  README                    |    9 -------
    >  README.md                 |    7 ++++++
    >  2 files changed, 7 insertions(+), 9 deletions(-)
    >  delete mode 100644 README
    >  create mode 100644 README.md
    ```
* 6 Use git push to push commits made on your local branch to a remote repository.
    ```
        git push origin master
    >Total 0 (delta 0), reused 0 (delta 0)
    >To https://github.com/rajraman786/bhaukaalnews.git
    >bcda9cf..f9fd8b1  master -> master
    
<br>

## Now refresh your repository .

<p align="center"><img src="../images/refresh.png"></p>



***
Feel free to ask your queries!! 🙌

## Keep Contributing !!  👋 
<br>
<p align="center"><img src="../images/logo1.png"></p>